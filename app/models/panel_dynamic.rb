class PanelDynamic < ActiveRecord::Base
  belongs_to :panel
  belongs_to :dynamic
end
