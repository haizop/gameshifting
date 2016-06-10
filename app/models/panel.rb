# == Schema Information
#
# Table name: panels
#
#  id            :integer          not null, primary key
#  name          :string
#  description   :text
#  default_state :json
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Panel < ActiveRecord::Base
  has_many :board_panels, dependent: :destroy
  has_many :boards, through: :board_panels

  has_many :panel_dynamics, dependent: :destroy
  has_many :dynamics, through: :panel_dynamics
end
