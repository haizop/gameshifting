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

require 'rails_helper'

RSpec.describe PanelDynamic, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
