# == Schema Information
#
# Table name: panel_dynamics
#
#  id         :integer          not null, primary key
#  panel_id   :integer
#  dynamic_id :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
# Indexes
#
#  index_panel_dynamics_on_dynamic_id  (dynamic_id)
#  index_panel_dynamics_on_panel_id    (panel_id)
#

class PanelDynamic < ActiveRecord::Base
  belongs_to :panel
  belongs_to :dynamic

  validates :panel, :dynamic, presence: true
end
